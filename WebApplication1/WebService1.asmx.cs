using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Services;
using System.Web.Script.Services;
using System.Data;

namespace WebApplication1
{
    /// <summary>
    ///WebService1 的摘要描述
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允許使用 ASP.NET AJAX 從指令碼呼叫此 Web 服務，請取消註解下列一行。
    [System.Web.Script.Services.ScriptService]
    //public是修飾詞
    public class WebService1 : System.Web.Services.WebService
    {
        public WebService1()
        {
            // InitializeComponent();
        }
        //function可以獨立存在，Method需要依附在類別
        //登入
        //[WebMethod]標籤寫法
        [WebMethod(Description = "登入")]
        public string hcLogin(string account, string password)
        {
            SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HomeCare1ConnectionString"].ConnectionString);
            SqlCommand objCmd = new SqlCommand("select * from [user] where account=@account and password=@password", Conn);
            objCmd.Parameters.AddWithValue("@account", account);
            objCmd.Parameters.AddWithValue("@password", password);

            SqlDataReader rd;
            Conn.Open();
            rd = objCmd.ExecuteReader();
            if (rd.Read())
            {
                Conn.Close();
                //回傳帳號，直接與使用者輸入的帳號做比對
                return account;
            }
            else
            {
                Conn.Close();
                return "帳號或密碼錯誤!!";
            }
        }
        //註冊
        [WebMethod(Description = "註冊")]
        public string hcRegister
        (string account, string password, string name, string gender, string birthday, string blood_type, string email)
        {
            SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HomeCare1ConnectionString"].ConnectionString);
            SqlCommand objCmd = new SqlCommand("insert into [user](account, password, name, gender, birthday, blood_type, email) values(@account, @password, @name, @gender, @birthday, @blood_type, @email) ", Conn);
            objCmd.Parameters.AddWithValue("@account", account);
            objCmd.Parameters.AddWithValue("@password", password);
            objCmd.Parameters.AddWithValue("@name", name);
            objCmd.Parameters.AddWithValue("@gender", gender);
            objCmd.Parameters.AddWithValue("@birthday", birthday);
            objCmd.Parameters.AddWithValue("@blood_type", blood_type);
            objCmd.Parameters.AddWithValue("@email", email);

            Conn.Open();
            objCmd.ExecuteNonQuery();
            Conn.Close();
            //回傳帳號，直接與使用者輸入的帳號做比對
            return account;
        }

        //顯示個人資料
        [WebMethod(Description = "顯示個人資料")]
        public DataSet hcPersonalData(string account)
        {
            //SqlDataAdapter objCmd = new SqlDataAdapter("select * from [user] where account='"+account+"'" , Conn);
            //objCmd.Parameters.AddWithValue("@account", account);

            SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HomeCare1ConnectionString"].ConnectionString);
            //由於SqlDataAdapter的物件沒有Parameters這個屬性，沒辦法直接置換變數來防止Sql injection
            //所以用迂迴一點的做法，先宣告一個空的SqlDataAdapter
            SqlDataAdapter adapter = new SqlDataAdapter();
            //再宣告一個SqlCommand來裝SQL語法，用SqlCommand的物件來置換變數
            SqlCommand cmd = new SqlCommand("select * from [user] where account=@account", Conn);
            cmd.Parameters.AddWithValue("@account", account);
            //再塞進SqlDataAdapter
            adapter.SelectCommand = cmd;

            //宣告一個DataSet，把adapter塞進去
            DataSet ds = new DataSet();
            adapter.Fill(ds, "user");

            return ds;
        }

        //修改個人資料
        [WebMethod(Description = "修改個人資料")]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string updateData(string account, string name, string email, string gender, string birthday, string blood_type)
        {
            SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HomeCare1ConnectionString"].ConnectionString);
            //這裡寫法近似於註冊，SqlCommand改成update
            SqlCommand objCmd = new SqlCommand("update [user] set name=@name,email=@email,gender=@gender,birthday=@birthday,blood_type=@blood_type where account=@account", Conn);
            objCmd.Parameters.AddWithValue("@account", account);
            objCmd.Parameters.AddWithValue("@name", name);
            objCmd.Parameters.AddWithValue("@gender", gender);
            objCmd.Parameters.AddWithValue("@birthday", birthday);
            objCmd.Parameters.AddWithValue("@blood_type", blood_type);
            objCmd.Parameters.AddWithValue("@email", email);

            Conn.Open();
            objCmd.ExecuteNonQuery();
            Conn.Close();
            //我隨便回傳一個值
            //想說之後可以拿來做一些事，ㄎㄎ
            return "0";
        }

        //新增自我檢測
        [WebMethod(Description = "新增自我檢測")]
        public string hcSelfTest
        (string form_num, string form_name, string result, string account)
        {
            SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HomeCare1ConnectionString"].ConnectionString);
            SqlCommand objCmd = new SqlCommand("insert into [self-test](form_num,form_name,result,account) values(@form_num,@form_name,@result,@account) ", Conn);
            objCmd.Parameters.AddWithValue("@account", account);
            objCmd.Parameters.AddWithValue("@form_num", form_num);
            objCmd.Parameters.AddWithValue("@form_name", form_name);
            objCmd.Parameters.AddWithValue("@result", result);

            Conn.Open();
            objCmd.ExecuteNonQuery();
            Conn.Close();
            //回傳帳號，直接與使用者輸入的帳號做比對
            return account;
        }






        //SqlConnection Conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HomeCare1ConnectionString"].ConnectionString);
        //SqlCommand objCmd = new SqlCommand("select * from [user] where account=@account", Conn);
        //objCmd.Parameters.AddWithValue("@account", account);

        //SqlDataReader rd;
        //Conn.Open();
        //rd = objCmd.ExecuteReader();
        //if (rd.Read())
        //{
        //    //把抓到的資料丟進陣列裡
        //    string[] pData = { rd[2].ToString(), rd[3].ToString(), rd[4].ToString(), rd[5].ToString(),
        //        rd[6].ToString(), rd[7].ToString(), rd[8].ToString() };
        //    //WebService只能傳List<T>，所以把pData丟進去
        //    List<string> list = new List<string>(pData);
        //    Conn.Close();
        //    //直接return List<T>
        //    return list;
        //}
        //else
        //{
        //    Conn.Close();
        //    List<string> list = new List<string>() { "網路連線失敗!" };
        //    return list;
        //}
    }
}