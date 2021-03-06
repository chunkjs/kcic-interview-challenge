import React, {
  createContext, useContext, useReducer, useMemo,
} from 'react';

type Action = { type: string; value: any };
type Dispatch = (action: Action) => void;

type State = { userList: Array<any>; currentUser?: any };
type UserProviderProps = { children?: React.ReactNode | React.ReactNode[] };

const UserContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
  const user = state.userList.find((item) => action.value === item.id.toString());
  switch (action.type) {
    case 'updateCurrentUser': {
      return { ...state, currentUser: user };
    }
    default: {
      return state;
    }
  }
};

function UserProvider({ children }: { children: UserProviderProps }) {
  const initialState: State = {
    userList: [
      {
        id: 0,
        username: 'Unauthenticated',
        roles: [],
      },
      {
        id: 1,
        username: 'SubmitterUser',
        roles: ['submitter'],
      },
      {
        id: 2,
        username: 'ApproverUser',
        roles: ['approver', 'submitter'],
      },
    ],
    currentUser: {
      id: 0,
      username: 'Unauthenticated',
      roles: [],
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return useMemo(() => <UserContext.Provider value={value}>{children}</UserContext.Provider>, [value]);
}

const useUserService = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserService must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserService };
