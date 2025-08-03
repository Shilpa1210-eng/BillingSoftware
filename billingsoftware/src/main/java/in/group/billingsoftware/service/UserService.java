package in.group.billingsoftware.service;

import in.group.billingsoftware.io.UserRequest;
import in.group.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUsers();

    void deleteUser(String id);
}
