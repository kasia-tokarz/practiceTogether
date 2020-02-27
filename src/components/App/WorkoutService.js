export class WorkoutService {
    getAllGroupes() {
        return JSON.parse(localStorage.getItem('groups'));
    }

    createGroup(formData) {
        const groupObject = {
            groupName: formData.groupName,
            owner: {
                name: formData.name,
                surname: formData.surname,
                age: formData.age,
                gender: formData.gender
            },
            practices: formData.practices,
            ownLocation: formData.ownLocation,
            location: formData.location,
            experience: formData.experience
        }

        const groupsFromLS = localStorage.getItem('groups');
        if (groupsFromLS) {
            const allGroups = JSON.parse(groupsFromLS);
            allGroups.push(groupObject);

            localStorage.setItem('groups', JSON.stringify(allGroups));
        } else {
            localStorage.setItem('groups', JSON.stringify([groupObject]));
        }

    }

    joinGroup(groupName, email) {
        const allGroups = JSON.parse(localStorage.getItem('groups'));
        const groupToJoin = allGroups.filter(group => group.groupName === groupName);
        groupToJoin.paricipants.push(email);
        //Todo: test
        localStorage.setItem('groups', JSON.stringify(allGroups));
    }
}



/*


groups: [

    {
        name: 'Joga with Kasia',X
        owner: {
            name: 'Kasia',X
            surname: 'K',X
            age: 33,X
            gender: 'F',X
        },
        practices: [
            'Joga', 'Meditation', 'Workout', 'CrossFit', 'Running'X
        ]
        ownLocation: true,X
        location: {
            lat: 100, Gen
            lng: 200 Gen
        },
        experience: 1 X
    }

]


*/