import service from '@/utils/request';

// 登录
export function adminLogin(username, password) {
    return service.post('/user/login', {
        username,
        password,
    });
}