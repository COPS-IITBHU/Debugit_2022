using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class scoring : collisiondetector
{
    // Start is called before the first frame update
    public Text score;
    void Start()
    {
        score = GetComponent<Text>();
        
    }

    // Update is called once per frame
    void LateUpdate()
    {
        writetext("score: ", points);
        Debug.Log(points);
    }

    public void writetext(string whattowrite, int num)
    {
        score.text = whattowrite + num.ToString();
    }
}
