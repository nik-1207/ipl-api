import {getAllTeamData,setAllTeamData} from "../../controller/teams";
import mockingoose from "mockingoose";
import teams from "../../models/teams";
const mockTeams=mockingoose(teams);
const mockData= new teams({
        id: "test-team",
        teamName: "test",
        winningYears:[],
        venue:"test"
    });

describe('read and write team in database',()=>{
    it('should set team ', async ()=>{
        mockTeams.toReturn(mockData,'save');
        const data=await setAllTeamData(mockData.id,mockData.teamName,
            mockData.winningYears,mockData.venue);
        expect(data).toBe(mockData);
        mockTeams.reset('save');
    });
    it('should get team details for a given team', async ()=>{
        mockTeams.toReturn(mockData,'find');
        const data=await getAllTeamData();
        expect(data).toBe(mockData);
        mockTeams.reset('find');
    });
});