export function ChangeDoughnutChartData(data) {
    const res = [
        { name: 'wins', value: data.first.wins },
        { name: 'losses', value: data.first.losses }
    ];

    return res;
}

export function ChangeRadarChartData(data) {
    const res = [
        { name: '가한 피해량', value: data.third[0] / data.totalMatch / 0.25 * 100 }, 
        { name: '받은 피해량', value: data.third[1] / data.totalMatch / 0.3 * 100 },
        { name: '분당 골드량', value: data.third[2] / data.totalMatch / 400 * 100 },
        { name: '시야 점수', value: data.third[3] / data.totalMatch / 2.5 * 100},
        { name: '스킬 명중률', value: data.third[4] / data.totalMatch / 0.5 * 100 }
    ];

    return res;
}