module.exports =  class TestTypeScript{

    test(){
        let tabua;
        tabua = [];
        for(let i = 1;i<=10;i ++){            
            tabua.push("5 X "+i+" = "+(5*i));
        }
        return tabua;
    } 
}