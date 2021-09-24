import { atom, atomFamily, selector, selectorFamily, waitForAll } from "recoil";
import Promise from "bluebird";
import { User } from "../models/userModel";

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 0,
});

// export const currentUserIDState = atom({
//   key: 'CurrentUserID',
//   default: selector({
//     key: 'CurrentUserID/Default',
//     get: async () => {
//       const response:any = await myDBQuery(1);
//       if (response instanceof User) {
//         return response.id;
//       }
//       throw 'error fire';
//     },
//   }),
// });
  
export const currentUserNameState = selector({
    key: 'CurrentUserName',
    get: ({get}) => {
      return tableOfUsers.filter(a => a.id === get(currentUserIDState))[0].name
    },
});

export const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({get}) => {
      const response = await myDBQuery(get(currentUserIDState));
      if (response instanceof User) {
        return response.name;
      }
      throw 'error fire';
    },
});

export const currentUserInfoQuery = selector({
  key: 'CurrentUserInfoQuery',
  get: ({get}) => get(userInfoQuery(get(currentUserIDState))),
});

export const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userID: number) => async () => {
    const response:any = await myDBQuery(userID);
    if (response instanceof User) {
      return response.name;
    }
    throw 'error fire';
  },
});

export const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get: (userID: number) => async () => {
    const response:any = await myDBQuery(userID);
    if (response instanceof User) {
      return response;
    }
    throw 'error fire';
  },
});

export const friendsInfoQuery = selector({
  key: 'FriendsInfoQuery',
  get: ({get}) => {
    const {friendList}:any = get(currentUserInfoQuery);
    //return friendList.map((friendID:any) => get(userInfoQuery(friendID)));
    const friends:any = get(
      waitForAll(friendList.map((friendID:any) => userInfoQuery(friendID))),
    );
    return friends;
  },
});

export const userInfoQueryRequestIDState = atomFamily({
  key: 'UserInfoQueryRequestID',
  default: 0,
});

export const userInfoQuery2 = selectorFamily({
  key: 'UserInfoQuery2',
  get: (userID: number) => async ({get}) => {
    alert(userID)
    get(userInfoQueryRequestIDState(userID)); // Add request ID as a dependency
    const response:any = await myDBQuery(userID);
    if (response instanceof User) {
      return response;
    }
    throw 'error fire';
  },
});

const myDBQuery = (userId:number):Promise<User|Error> => {
    return Promise.delay(2000).then(function() {
      return tableOfUsers.filter(a => a.id === userId)[0]
      //return new Error("error");
    })
}

const tableOfUsers: User[] = [
  new User(0, "라스", 100, [1, 2, 4]),
  new User(1, "제임스", 200, [3, 4]), 
  new User(2, "론", 300, [1, 3, 5]), 
  new User(3, "데이브", 30, [6, 5]), 
  new User(4, "클리프", 40, [2, 3, 4]), 
  new User(5, "커크", 50, [2, 4]),  
  new User(6, "제이슨", 30, [2, 3, 5]) ,
  new User(7, "로버트", 30, [1, 2, 6]) 
];

/*
export const imageState = atomFamily({
  key: "imageState",
  default: async id => getImage(id)
});

const { name, url } = useRecoilValue(imageState(id));

export const currentUserIDState2 = atomFamily({
  key: 'CurrentUserID',
  default: (id) => id,
});
*/