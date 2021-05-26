import http from '@/common/http';

export const getGirl = () =>
    http.GET('https://gank.io/api/v2/random/category/Girl/type/Girl/count/2', {});
