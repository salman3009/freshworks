export const payloadCreation=(payload)=>{
    switch(payload.title.toLowerCase()){
        case "master":
            return {
              masterList:payload.description
            }
        case "sub":{
            return {
                subList:payload.description
            }
        }
    }
}