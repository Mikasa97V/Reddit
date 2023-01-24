import {IDate} from "../interfaces/IDate";

export function normalizeTimestamp(stamp: number, isSeparate?: boolean): string | IDate {
    const date = (new Date(stamp * 1000));
    const formattedDate =
        '' + date.getDate() +
        "-" + (date.getMonth() + 1) +
        "-" + date.getFullYear();

    const formattedTime =
        ' ' + date.getHours() +
        ":" + date.getMinutes() +
        ":" + date.getSeconds();

    if (isSeparate) {
        const splitDate = formattedDate.split('-');
        const splitTime = formattedTime.split(':');

        return {
            day: splitDate[0],
            month: splitDate[1],
            year: splitDate[2],
            hours: splitTime[0],
            minutes: splitTime[1],
            seconds: splitTime[2]
        }
    } else {
        return formattedDate.concat(formattedTime)
    }
}
