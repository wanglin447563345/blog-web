 const Routes = [
    {
        name:"首页",
        path:"/home",
        component:()=>import("./routes/home/Home"),
    },
    {
        name:"列表",
        path:"/list",
        component:()=>import("./routes/list/List"),
    },
];

export default Routes