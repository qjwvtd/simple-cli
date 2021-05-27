import http from '@/common/http';

export const getReact = () => http.GET('http://localhost:3000/api/react', {});
export const getTypescript = () => http.GET('http://localhost:3000/api/typescript', {});
export const getAntd = () => http.GET('http://localhost:3000/api/antd', {});
export const login = () => http.POST('http://localhost:3000/api/login', {});