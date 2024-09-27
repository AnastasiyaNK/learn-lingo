
export const selectAuthUserData = (state) => state.auth.userData;
export const selectAuthIsSignedIn = (state) => state.auth.isSignedIn;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;

export const selectTeachersData = (state) => state.teachers.teachers;
export const selectTeachersIsLoading = (state) => state.teachers.isLoading;
export const selectTeachersError = (state) => state.teachers.error;
export const selectTeacherId = (state) => state.teachers.selectedTeacherId;
export const selectFavTeacherIds = (state) => state.teachers.favTeachersIds;

