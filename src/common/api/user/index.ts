import http from '@/common/http';

// 登录
export const getUser = () => http.GET('http://localhost:3000/api/user', {});

