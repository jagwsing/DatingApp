namespace API.Errors;

public class ApiException
{
    public ApiException(int statusCode,string messge,string details)
    {
        StatusCode = statusCode;
        Message = messge;
        Details = details;
    }

    public int StatusCode { get; set; }
    public string Message { get; set; }
    public string Details { get; set; }

}
