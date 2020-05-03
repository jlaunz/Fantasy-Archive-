// Define action types here

const TEST_ACTION = "TEST_ACTION"
const TEST_ADD_MOCKDATA = "TEST_ADD_MOCKDATA";
const REFREASH_HOSTPAGE = "REFREASH_HOSTPAGE";
const REFREASH_PLAYLIST = "REFREASH_PLAYLIST";



// define action creators here
let testActionCreator = (content) => {
    return {
        type: TEST_ACTION,
        content: content
    }
}

// define action creators here
let refreshHostPage = (data) => {
    return {
        type: REFREASH_HOSTPAGE,
        data: data
    }
};

// define action creators here
let refreshPlaylist = (data) => {
    return {
        type: REFREASH_PLAYLIST,
        data: data
    }
};


export {testActionCreator, refreshHostPage, refreshPlaylist}
