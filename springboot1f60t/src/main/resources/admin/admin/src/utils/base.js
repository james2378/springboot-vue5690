const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1f60t/",
            name: "springboot1f60t",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1f60t/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "数码论坛系统设计与实现"
        } 
    }
}
export default base
