import team from "../models/teams";

const getAllTeamData = () => {
    return team.find({}, {_id: 0, __v: 0})
        .then((data) => data).catch(() => Error);
}

const setAllTeamData = async (id: string, teamName: string, winningYears: Array<number>, venue: string) => {
    const teamDocument = new team({
        id: id,
        teamName: teamName,
        winningYears: winningYears,
        venue: venue
    });
    return await teamDocument.save()
}
export {getAllTeamData, setAllTeamData}
