const state = {
  discussions: [
    {
      id: 1,
      date: 1671886814000,
      user: {
        name: "Savannah Nguyen",
      },
      text: "We have just published the first campaign. Let's see the results in the 5 days and we will iterate on this.",
      likes: 50,
      iLikedIt: true,
      replies: [],
    },
    {
      id: 2,
      date: 1672232414000,
      user: {
        name: "Marvin McKinney",
        avatar:
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      },
      text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
      likes: 2,
      iLikedIt: false,
      replies: [],
    },
    {
      id: 3,
      date: 1672576574000,
      user: {
        name: "Bessie Cooper",
        avatar:
          "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
      },
      text: "I think for our second compaign we can try to target a different audience. How does it sound for you?",
      likes: 2,
      iLikedIt: false,
      replies: [],
    },
    {
      id: 5,
      date: 1672581014000,
      user: {
        name: "Marvin McKinney",
        avatar:
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      },
      text: "Yes, that sounds good! I can think about this tomorrow. Then do we plan to start that compaign?",
      likes: 3,
      iLikedIt: true,
      discussionForeignKey: 3,
    },
    {
      id: 6,
      date: 1672581614000,
      user: {
        name: "Bessie Cooper",
        avatar:
          "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
      },
      text: "We plan to run the compaign on Friday - as far as I know. Do you think you will get this done by Thursday @Marvin?",
      likes: 0,
      iLikedIt: false,
      discussionForeignKey: 3,
    },
  ],
};

const getters = {
  getDiscussions: (state) => {
    var discussions = state.discussions.filter((d) => !d.discussionForeignKey);
    discussions.forEach((discussion) => {
      var replies = state.discussions.filter(
        (d) => d.discussionForeignKey == discussion.id
      );
      discussion.replies = replies;
    });

    return discussions.sort(
      (firstItem, secondItem) => secondItem.date - firstItem.date
    );
  },
};

const actions = {
  startDiscussion(context, { discussionText }) {
    var discussion = {
      id: new Date().getTime(),
      date: new Date().getTime(),
      user: context.rootState.user.user,
      text: discussionText,
      likes: 0,
      iLikedIt: false,
      replies: [],
    };

    context.commit("addDiscussion", discussion);
  },
  replyDiscussion(context, { discussionText, discussionId }) {
    var discussion = {
      id: new Date().getTime(),
      date: new Date().getTime(),
      user: context.rootState.user.user,
      text: discussionText,
      likes: 0,
      iLikedIt: false,
      discussionForeignKey: discussionId,
    };

    context.commit("addDiscussion", discussion);
  },
  likeDiscussion(context, { discussion }) {
    context.commit("likeDiscussion", discussion);
  },
};

const mutations = {
  addDiscussion: (state, discussion) => {
    state.discussions.push(discussion);
  },
  likeDiscussion: (state, discussion) => {
    state.discussions.every((d) => {
      if (d.id == discussion.id) {
        discussion.iLikedIt = !discussion.iLikedIt;
        if (discussion.iLikedIt) {
          //like
          discussion.likes += 1
        } else {
          //dislike
          discussion.likes -= 1
        }
        return false;
      }
      return true;
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
