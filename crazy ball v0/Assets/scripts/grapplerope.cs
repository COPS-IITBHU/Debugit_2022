using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(LineRenderer))]
public class grapplerope : MonoBehaviour
{
    // Start is called before the first frame update
    public LineRenderer lr;
    void Awake()
    {
        lr = GetComponent<LineRenderer>();
        
    }

    // Update is called once per frame
    public void LineRender(Vector3 startpoint, Vector3 endpoint)
    {
        lr.positionCount = 2;
        Vector3[] points = new Vector3[2];
        points[0] = startpoint;
        points[1] = endpoint;
        lr.SetPositions(points);


    }
    public void Endline()
    {
        lr.positionCount = 0;
    }
}
