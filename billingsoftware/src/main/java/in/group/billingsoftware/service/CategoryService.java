package in.group.billingsoftware.service;

import in.group.billingsoftware.io.CategoryRequest;
import in.group.billingsoftware.io.CategoryResponse;

import java.util.List;

public interface CategoryService {

    CategoryResponse add(CategoryRequest request);

    List<CategoryResponse> read();

    void delete(String categoryId);
}
