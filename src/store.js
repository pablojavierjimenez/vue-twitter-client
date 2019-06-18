import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiPath: location.protocol + '//' + location.hostname + ':8000',
    timeLineTwitList: [],     // http://localhost:8000/timeline?count=100
    showedTwitItemList: [],
    friendsList: [],           // http://localhost:8000/friends/list
    friendsPaginationCursor: new Number(),           // http://localhost:8000/friends/list
    trendsList: [],       // http://localhost:8000/trends?id=23424747
    singleTwitDetailsData: {
      display: false,
      itemData: {
        text: 'default text'
      }
    },
    // searchTwitList: [],       // http://localhost:8000/search?q=front%20end
    // showSingleTwit: {},       // http://localhost:8000/show?id=1011417658833551361
  },

  getters: {
    get_apiPath(state) {
      return state.apiPath;
    },
    get_timeLineTwitList(state) {
      return state.timeLineTwitList;
    },
    get_timeLineTwitListQuantity(state, getters) {
      // https://vuex.vuejs.org/guide/getters.html
      return getters.get_timeLineTwitList.length;
    },
    get_showedTwitItemList(state) {
      return state.showedTwitItemList;
    },
    get_friendsList(state) {
      return state.friendsList;
    },
    get_singleTwitDetailsData(state) {
      return state.singleTwitDetailsData;
    },
  },

  mutations: {
    // TIMELINE
    mut_setTimeLineTwiterList(state, newListDataFromServer) {
      return state.timeLineTwitList = newListDataFromServer;
    },
    mut_setShowedTwitItemList(state, newListDataFromServer) {
      return state.showedTwitItemList = newListDataFromServer;
    },
    mut_setTimeLineItemsOnShowedTwitItemList(state, limit) {
      state.timeLineTwitList.splice(0, limit)
        .map(item => state.showedTwitItemList.push(item));
    },
    // FRIENDS
    mut_setFriendsList(state, newFriendsListDataFromServer) {
      return state.friendsList = newFriendsListDataFromServer;
    },
    mut_setFriendsPaginationCursor(state, newFriendsCursorId) {
      return state.friendsPaginationCursor = newFriendsCursorId;
    },
    // TRENDS
    mut_setTrendsList(state, newTrendsListDataFromServer) {
      return state.trendsList = newTrendsListDataFromServer;
    },
    // TWITTER ITEM
    mut_singleTwitDetailsData(state, newSingleTwitDetailsData) {
      return state.singleTwitDetailsData = newSingleTwitDetailsData;
    },
  },

  actions: {
    /**
     * @param {number} counterLimit
     * @returns {Array} array of twits from server
     * @example of Implementation
     *     this.$store.dispatch( 'act_setUserListDataFromServer', 100 );
    */
    act_setTimeLineTwiterList(context, counterLimit) {
      // console.log('context', context);
      // console.log('medio', counterLimit);
      let url = `${context.state.apiPath}/timeline?count=${counterLimit}`;

      fetch(url).then((response) => {
        if (response.status !== 200) {
          // console.log('200OK Twitter Timeline: ' + response.status);
          // console.log('Twitter Timeline: ' + response.status);
          return;
        }
        // console.log('Twitter Timeline: ' + JSON.stringify(response));
        // Examine the text in the response
        response.json().then(function (data) {
          // context.commit('mut_setTimelineItemList', data);
          // console.log('responsed data: ', data);
          context.commit('mut_setTimeLineTwiterList', data);
          context.commit('mut_setTimeLineItemsOnShowedTwitItemList', 6);
          let firstSingleTwitDetails = {
            display: false,
            itemData: data[0]
          };
          context.commit('mut_singleTwitDetailsData', firstSingleTwitDetails);
        });
      })
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    },
    act_setTimeLineItemsOnShowedTwitItemList(context, limit) {
      context.commit('mut_setTimeLineItemsOnShowedTwitItemList', limit);
    },
    act_setFriendsList(context) {
      let url = `${context.state.apiPath}/friends`;
      fetch(url).then((response) => {
        if (response.status !== 200) {
          console.log('200OK Twitter Friends: ' + response.status);
          console.log('Twitter Friends: ' + response.status);
          return;
        }
        // console.log('Twitter Friends: ' + JSON.stringify(response));
        // Examine the text in the response
        response.json().then(function (data) {
          console.log('responsed data: ', data);
          context.commit('mut_setFriendsList', data.users);
          context.commit('mut_setFriendsPaginationCursor', data.next_cursor);

        });
      })
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    },
    act_setTrendsList(context) {
      let url = `${context.state.apiPath}/trends?id=23424747`;
      fetch(url).then((response) => {
        if (response.status !== 200) {
          console.log('200OK Twitter Trends: ' + response.status);
          console.log('Twitter Trends: ' + response.status);
          return;
        }
        response.json().then(function (data) {
          console.log('trends data: ', data[0].trends);
          data[0].trends.sort(function (a, b) {
            return b.tweet_volume - a.tweet_volume;
          });
          context.commit('mut_setTrendsList', data[0].trends);
        });
      })
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    },
    act_singleTwitDetailsData(context, newSingleTwitDetailsData) {
      context.commit('mut_singleTwitDetailsData', newSingleTwitDetailsData);
    }
  }
});
