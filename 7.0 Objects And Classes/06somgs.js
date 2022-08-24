function songs(userInput) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songsCount = userInput.shift();
    let typeSong = userInput.pop();
    let newArray = [];
    for (let element of userInput) {
        let [type, songName, length] = element.split('_');
        let son = new Song(type, songName, length)
        newArray.push(son);
    }
    if (typeSong == 'all') {
        newArray.forEach((i) => console.log(i.name));
    } else {
        let filtered = newArray.filter((i) => i.typeList == typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
} //100 /100 ма нищу ни разбрах ХДД
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);