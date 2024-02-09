import deleteImages from "./utils/deleteImages";
import fetchData from "./utils/fetchData"

const url = process.env.REACT_APP_SERVER_URL + '/gear'

export const createGear = async(gear, currentUser, dispatch, setPage) =>{
    dispatch({type: 'START_LOADING'})

    const result = await fetchData({
        url,
        body:gear,
        token:currentUser?.token
    }, dispatch)

    if(result){ // function responsible for creating the room
        dispatch({type:'UPDATE_ALERT', payload:{open:true, severity:'success', message:'Gear has been added successfully'}});
        dispatch({type: 'RESET_GEAR'})
        setPage(0);
        dispatch({type: 'UPDATE_GEAR', payload:result});
    }

    dispatch({type: 'END_LOADING'});
};

// function or action responsibe from bring the gear from te server this will e similar to reservations 
export const getGears = async(dispatch)=>{
    const result = await fetchData({url, method:'GET'}, dispatch)
    if(result){
        dispatch({type:'UPDATE_GEARS', payload: result});
    }
};

export const deleteGear = async(gear, currentUser, dispatch) =>{
    dispatch({type: 'START_LOADING'})

    const result = await fetchData({
        url:`${url}/${gear._id}`,
        method:'DELETE',
        token:currentUser?.token
    }, dispatch)

    if(result){ // function responsible for creating the room
        dispatch({type:'UPDATE_ALERT', payload:{open:true, severity:'success', message:'Gear has been deleted successfully'}});
        dispatch({type: 'DELETE_GEAR', payload:result._id});
        deleteImages(gear.images, currentUser.id);
    }

    dispatch({type: 'END_LOADING'});
};