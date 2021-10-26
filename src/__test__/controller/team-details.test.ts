import mockingoose from "mockingoose";
import teamDetails from "../../models/team-details";
import {getTeamDetails,setTeamDetails} from "../../controller/team-details";

const mockTeamDetails=mockingoose(teamDetails);
const mockTeamData=new teamDetails({
    id:'test-team',
    team:{
        captainId: "_test01",
        wicketKeeperId: "_test02"
    },
    players:[
        {id: "test_player_id",
            image: "test image url",
            name: "test Name",
            nationality: "test country",
            stats: {
                matches: 5,
                runs: 5,
                wickets: 5
            }}]
});

describe('read and write team-details in database',()=>{
   it('should set team details for a given team name',async ()=>{
        mockTeamDetails.toReturn(mockTeamData,'save');
        const data=await setTeamDetails(mockTeamData.id,
            mockTeamData.team,mockTeamData.players);
        expect(data).toBe(mockTeamData);
       mockTeamDetails.reset('save');
   });
    it('should throw Error if some error occured in save ',()=>{
        mockTeamDetails.toReturn(new Error('Internal server error'),
            'save');
        expect(setTeamDetails(mockTeamData.id,
            mockTeamData.team,mockTeamData.players))
            .rejects.toThrowError('err in saving document');
        mockTeamDetails.reset('save');
    });
   it('should get team details for a given team', async ()=>{
        mockTeamDetails.toReturn(mockTeamData,'findOne');
        const data=await getTeamDetails('test-team');
        expect(data).toBe(mockTeamData);
        mockTeamDetails.reset('findOne');
    });
   it('should throw error if data not exist', ()=>{
        mockTeamDetails.toReturn(null, 'findOne');
        expect(getTeamDetails('unknown')).rejects
            .toThrowError('team Id not available');
       mockTeamDetails.reset('findOne');
    });
});