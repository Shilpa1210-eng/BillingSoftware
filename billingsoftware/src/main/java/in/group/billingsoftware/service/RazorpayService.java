package in.group.billingsoftware.service;

import com.razorpay.RazorpayException;
import in.group.billingsoftware.io.RazorpayOrderResponse;

public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
