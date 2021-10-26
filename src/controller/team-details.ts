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
    return  teamDetails.findOne({id:teamName},{__id:0,__v:0})
        .then((data)=> {
            if (data!==null){
                return data;
            }else{
                throw new Error('team Id not available');
            }
        });
}

const setTeamDetails = (id: string, team: teamType, players: Array<playerType>) => {
    const document = new teamDetails({
        id: id,
        team: team,
        players: players,
    })
    return  document.save().then((data:unknown)=>data).catch(()=>{
        throw new Error("Internal Server Error");
    });
}
export {getTeamDetails, setTeamDetails}