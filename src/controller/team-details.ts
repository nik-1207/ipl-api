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
    const data = teamDetails.find({id: teamName}, {_id: 0, __v: 0})
        .then((data) => data).catch(() => Error);
    return data.length > 0 ? data : Error;
}

const setTeamDetails = (id: string, team: teamType, players: Array<playerType>) => {
    const document = new teamDetails({
        id: id,
        team: team,
        players: players,
    })
    return  document.save().then((data)=>data).catch(()=>Error)

}
export {getTeamDetails, setTeamDetails}