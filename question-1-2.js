
let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWord(array){

    let strings = array.filter(x => typeof x === "string")
    const lowerCase = strings.map(element => { return element.toLowerCase();
    });
    console.log(lowerCase)
    let myPromise = new Promise(function(myResolve, myReject) {
        const delayedSuccess = () => {
            setTimeout(() => {
                let success = {'message' : 'delayed success!'}
                console.log(success)
        
            }, 500)
        }
        
        const delayedException = () => {
            setTimeout(() => {
                try{
                    throw new Error('error : delayed exception!')
        
                } catch(e){
                    console.error(e)
                }
            }, 500)
        }

        if(lowerCase.length > 0){
            myResolve() = delayedSuccess()
        }else{
            myReject() = delayedException()
        }

    })
}
lowerCaseWord(mixedArray)

