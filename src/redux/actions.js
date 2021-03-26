// static literal
export const myAction = {
  type: 'MY_ACTION',
  payload: 'super Payload!',
};

// dynamic literal
// export const myDynamicAction = value => {
//     return {
//         type: 'MY_DYNAMIC_ACTION',
//         payload: { value }
//     }
// };
// аналогичная запись для избежания return:
export const myDynamicAction = value => ({
  type: 'MY_DYNAMIC_ACTION',
  payload: { value },
});
