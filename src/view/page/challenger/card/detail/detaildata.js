import Cs from "./cs";
import Dealing from "./dealing";
import Gold from "./gold";
import Kill from "./kill";

export const buttonData=[
    {
        id:1,
        name:'킬',
        value:'kill',
    },
    {
        id:2,
        name:'딜량',
        value:'dealing',
    },
    {
        id:3,
        name:'골드',
        value:'gold',
    },
    {
        id:4,
        name:'CS',
        value:'cs',
    },
];

export const selectComponent={
    kill:<Kill></Kill>,
    dealing:<Dealing></Dealing>,
    gold:<Gold></Gold>,
    cs:<Cs></Cs>,
}