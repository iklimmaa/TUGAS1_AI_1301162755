suhu = 100
final_suhu = 0.001
alpha = 0.999

x1 = Math.random(-10,10)
x2 = Math.random(-10,10)
init_value = [x1,x2]


function f(x1, x2){
    func = -((Math.sin(x1)*Math.cos(x2))+((4/5)*Math.exp(1-Math.sqrt((x1*x1)+(x2*x2)))))
    return func
}

function cost(value){
    return f(value[0],value[1])
}

function annealing_schedule(suhu,alpha){
    return suhu*alpha
}

function peluang_accept(new_cost,cur_cost,suhu){
    delta = new_cost - cur_cost
    return Math.exp(-(delta)/suhu)
}

function simmulated(init_value, suhu, final_suhu, alpha){
    //solusi = 
    solusi = []
    cur_value = init_value
    cur_cost = cost(init_value)

    best_solusi = init_value
    best_cost = cur_cost

    i = 1
    while(suhu > final_suhu){

        for(let j = 1; j < suhu; j++){
            x1 = Math.random(-10,10)
            x2 = Math.random(-10,10)
            new_value = [x1,x2]
            new_cost = cost(new_value)
        }
        if(new_cost < cur_cost){
            cur_value = new_value
            cur_cost = new_cost
            if(cur_cost < best_cost){
                best_solusi = cur_value
                best_cost = cur_cost
            }
        }
        else{
            peluang = peluang_accept(new_cost,cur_cost,suhu)
            if(peluang > Math.random(0,1)){
                cur_value = new_value
                cur_cost = new_cost
            }
        }
        solusi[i] = [suhu,best_solusi,best_cost]
        i = i + 1
        suhu = annealing_schedule(suhu,alpha)
    }
    return solusi
}

solusi = simmulated(init_value,suhu,final_suhu,alpha)
console.log("Nilai x1 dan X2 :" + best_solusi )
console.log("Nilai minimum : " + best_cost )
// console.log(solusi)