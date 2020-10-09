const axios = require('axios');
const { time } = require('console');


const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=dyRsYk0LyA8%2CvRXZj0DzXIA%2CioNng23DkIM%2C2S24-y0Ij3Y%2Cb73BI9eUkjM%2CIHNzOHi8sJs%2CAmq-qlqbjYA%2CFzVR_fymZw4%2C9pdj4iJD08s%2CdISNgvVpWlo%2CbwmSjveL3Lc&key=AIzaSyAkPRCx0WYL04R8ALIA79PDDedDYUATtoA';

const options = {
    Authorization: 'Bearer AIzaSyAkPRCx0WYL04R8ALIA79PDDedDYUATtoA',
    Accept: 'application/json'
};

var prevDatas;

exports.welcome = async(req, res) => {
    res.render('index', { title: 'Welcome' })
}

exports.blackpinkStat = async(req, res) => {
    var stats = await axios.get(url, options);
    var datas = stats.data.items;
    var date = stats.headers.date;
    var newDatas = {};

    if (datas && prevDatas) {

        let newDataDiff, arr1 = [];

        newDataDiff = datas.reduce((acc1, val1) => {

            let a = [];
            a = prevDatas;

            let statDiff = {};



            statDiff = a.reduce((acc2, val2) => {

                let diff = {};

                if (val1.id == val2.id) {
                    diff.viewCount = val1.statistics.viewCount - val2.statistics.viewCount;
                    diff.likeCount = val1.statistics.likeCount - val2.statistics.likeCount;
                    diff.commentCount = val1.statistics.commentCount - val2.statistics.commentCount;
                    acc2 = diff;
                }
                return acc2;

            }, {});


            val1.statDiff = statDiff;
            arr1.push(val1);
            acc1 = arr1;
            return acc1;
        }, []);

        console.log(newDataDiff);
        prevDatas = datas;
        datas = newDataDiff;
        newDatas = { datas, date };
        res.json(newDatas);
    } else {
        newDatas = { datas, date };
        prevDatas = datas;
        res.json(newDatas);
    }
}