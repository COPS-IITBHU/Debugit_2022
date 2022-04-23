using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class final_score_showing : MonoBehaviour
{
   
   
    public Text final_score_display;
    private void Start()
    {
        final_score_display.text = "HIGH SCORE: " + PlayerPrefs.GetInt("points").ToString();
        
    }
   

}
