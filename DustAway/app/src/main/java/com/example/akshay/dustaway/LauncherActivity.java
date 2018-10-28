package com.example.akshay.dustaway;

import android.app.PendingIntent;
import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.telephony.gsm.SmsManager;
import android.text.Html;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.github.nisrulz.sensey.ChopDetector;
import com.github.nisrulz.sensey.Sensey;
import com.ibm.watson.developer_cloud.conversation.v1.ConversationService;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageRequest;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;
import com.ibm.watson.developer_cloud.http.ServiceCallback;

import java.util.HashMap;
import java.util.Map;

import co.intentservice.chatui.ChatView;
import co.intentservice.chatui.models.ChatMessage;

public class LauncherActivity extends AppCompatActivity {

    private Button score;
    private Button region;

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.launcher_menu, menu);
        return super.onCreateOptionsMenu(menu);
    }



    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        if(item.getItemId() == R.id.media_route_menu_item){
            Intent i = new Intent(this,LeaderBoard.class);
            startActivity(i);
        }
        return super.onOptionsItemSelected(item);


    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_launcher);
        Sensey.getInstance().init(this);
        score = (Button) findViewById(R.id.score);
        region = (Button) findViewById(R.id.region);
        update();

        final ConversationService myConversationService =
                new ConversationService(
                        "2017-05-26",
                        getString(R.string.username),
                        getString(R.string.password)
                );


    }

    public void update()
    {
        RequestQueue queue = Volley.newRequestQueue(this);
        String url ="http://pechackathon.herokuapp.com/api/scoreUpdate/1/0/";

        StringRequest strRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>()
                {
                    @Override
                    public void onResponse(String response)
                    {
                        int idx = response.indexOf("score");
                        String out  = response.substring(idx + 8);
                        idx = out.indexOf(",");
                        score.setText(out.substring(0, idx));
                        idx = out.indexOf("region");
                        out = out.substring(idx + 10);
                        idx = out.indexOf("}");
                        region.setText(out.substring(0, idx-1));
                        //Toast.makeText(getApplicationContext(), out, Toast.LENGTH_LONG).show();
                    }
                },
                new Response.ErrorListener()
                {
                    @Override
                    public void onErrorResponse(VolleyError error)
                    {
                        Toast.makeText(getApplicationContext(), error.toString(), Toast.LENGTH_SHORT).show();
                    }
                })
        {
            @Override
            protected Map<String, String> getParams()
            {
                Map<String, String> params = new HashMap<String, String>();
                params.put("tag", "test");
                return params;
            }
        };

        queue.add(strRequest);
    }

    @Override
    public void onResume(){
        super.onResume();
        update();
    }


    public void camera(View view)
    {
        Intent i = new Intent(this, ImageDetection.class);
        startActivity(i);
    }

    public void dustbin(View view)
    {
        Intent i = new Intent(this, MapsActivity.class);
        startActivity(i);
    }

    public void cycle(View view)
    {
        Intent i = new Intent(this, cycleActivity.class);
        startActivity(i);
    }

}