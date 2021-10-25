import teamDetails from "../models/team-details";

interface teamType {
    captainId: string,
    wicketKeeperId: string
}

interface playerType {
    id: string,
    image: string,
    name: string,
    nationality: string,
    stats: {
        matches: number,
        runs: number,
        wickets: number
    }
}

const getTeamDetails = (teamName: string) => {
    return teamDetails.find({id: teamName}, {_id: 0, __v: 0})
        .then((data) => {
            if (data.length > 0) {
                return data
            } else {
                return Error
            }
        }).catch(() => Error);
}

const setTeamDetails = async (id: string, team: teamType, players: Array<playerType>) => {
    const document = new teamDetails({
        id: id,
        team: team,
        players: players,
    })
    return await document.save()

}
export {getTeamDetails, setTeamDetails}