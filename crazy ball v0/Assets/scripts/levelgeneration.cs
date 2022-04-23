using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class levelgeneration : MonoBehaviour
{
    public GameObject[] objects;

    private void Start()
    {
        int rand = Random.Range(0, objects.Length);
        //transform.position.z = 0;
        Instantiate(objects[rand], transform.position, Quaternion.identity);
    }
}
