// import axiosInstance from '../common/instance';

// export const getRequest = async (): Promise<ProfileTypes> => {
//   const res = await axiosInstance.get('auth/profile');
//   return res.data.data;
// };

// export const postRequest = async (params) => {
//   const res = await axiosInstance.post('auth/profile', params);
//   return res;
// };

// export const postFormData = async (data) => {
//   const dataTemp = new FormData();
//   dataTemp.append('image', data.image);
//   const config = {
//     headers: { 'content-type': 'multipart/form-data' },
//   };
//   const res = await axiosInstance.post('auth/update-avatar', dataTemp, config);
//   return res;
// };

// export default loginService;

export {};
