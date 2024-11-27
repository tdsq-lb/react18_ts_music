import { createSlice } from "@reduxjs/toolkit"

interface InitialStateType {
  currentSong: any
}

const initialState: InitialStateType = {
  currentSong: {
    "name": "撕夜",
    "id": 1376489571,
    "pst": 0,
    "t": 0,
    "ar": [
        {
            "id": 28416044,
            "name": "野小马",
            "tns": [],
            "alias": []
        }
    ],
    "alia": [],
    "pop": 80,
    "st": 0,
    "rt": "",
    "fee": 0,
    "v": 9,
    "crbt": null,
    "cf": "",
    "al": {
        "id": 80257629,
        "name": "撕夜",
        "picUrl": "https://p1.music.126.net/r1yEUY-bo_6nsuNmfHerGg==/109951164198581589.jpg",
        "tns": [],
        "pic_str": "109951164198581589",
        "pic": 109951164198581580
    },
    "dt": 272431,
    "h": {
        "br": 320000,
        "fid": 0,
        "size": 10899374,
        "vd": -65727,
        "sr": 44100
    },
    "m": {
        "br": 192000,
        "fid": 0,
        "size": 6539642,
        "vd": -63133,
        "sr": 44100
    },
    "l": {
        "br": 128000,
        "fid": 0,
        "size": 4359776,
        "vd": -61516,
        "sr": 44100
    },
    "sq": null,
    "hr": null,
    "a": null,
    "cd": "01",
    "no": 1,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 0,
    "s_id": 0,
    "mark": 0,
    "originCoverType": 2,
    "originSongSimpleData": null,
    "tagPicList": null,
    "resourceState": true,
    "version": 9,
    "songJumpInfo": null,
    "entertainmentTags": null,
    "awardTags": null,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "rtype": 0,
    "rurl": null,
    "mst": 9,
    "cp": 0,
    "publishTime": 1562428800000
}
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {}
})

export default playerSlice.reducer
