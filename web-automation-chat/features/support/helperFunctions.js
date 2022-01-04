export function loopLog(whatLog, whereToPush) {
    for (const link of whatLog) {
        whereToPush.push(link.getText());
    }

    return whereToPush;
}