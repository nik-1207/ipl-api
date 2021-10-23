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

const getTeamDetails = (teamName:string ) => {
    return  teamDetails.find({id: teamName}, {_id: 0, __v: 0})
        .then((data) => data).catch(() => {
            return Error
        });
}
const setTeamDetails = async (id: string, team: teamType, players: Array<playerType>) => {
    const document = new teamDetails({
        id: id,
        team: team,
        players: players,
    })
    try {
        return await document.save()
    } catch (err) {
        return err
    }
}
export {getTeamDetails, setTeamDetails}