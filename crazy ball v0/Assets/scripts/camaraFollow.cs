using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class camaraFollow : MonoBehaviour
{
    private Transform player;
    private Vector3 tempos;
    void Start()
    {
        player = GameObject.FindWithTag("Player").transform;
    }

    // Update is called once per frame
    void LateUpdate()
    {
        if (!player)//!player is same as player == null 
        {
            return;
        }
        tempos = transform.position;
        tempos.x = player.position.x;
        tempos.y = player.position.y;
        

            transform.position = tempos;

        

    }

}
