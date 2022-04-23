using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class grapplehookgame : MonoBehaviour
{
    private Vector3 grapplepoint;
    public LayerMask whatisgrappable;
    private SpringJoint2D grapplinghook;
    public Transform player;
    private Rigidbody2D rb;
    private Camera cam;
    private grapplerope gr;
    public float force = 0.5f;
    public float jumpingpower = 10f;
    public ParticleSystem player_death;
    private void Awake()
    {
        Physics2D.queriesStartInColliders = false;
        gr = GetComponent<grapplerope>();
        grapplinghook = transform.gameObject.AddComponent<SpringJoint2D>();
        grapplinghook.enabled = false;
        Physics2D.queriesStartInColliders = false;
        cam = Camera.main;
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.W))
        {
            JumpForce();
        }

        if (Input.GetMouseButtonDown(0))
        {
            Startgrapple();
            //grapplinghook.enableCollision = true;
        }
        else if (Input.GetMouseButtonUp(0))
        {
            Stopgrapple();
        }

    }
    
    private void LateUpdate()
    {
        drawRope();
    }

    void Startgrapple()
    {
        
        // direction for ray calculated
        Vector3 dir = new Vector3((cam.ScreenToWorldPoint(Input.mousePosition).x - player.position.x), (cam.ScreenToWorldPoint(Input.mousePosition).y - player.position.y), 0);
        RaycastHit2D hitInfo = Physics2D.Raycast(player.position, dir, 10);
        //Debug.Log(grapplinghook.enableCollision) ;

        if (hitInfo.collider != null)
        {
            if (hitInfo.collider.tag == "Hook" || hitInfo.collider.tag == "bonus100" || hitInfo.collider.tag == "bonus200")
            {
                grapplepoint = hitInfo.point;
                grapplinghook.enabled = true;
                grapplinghook.connectedAnchor = grapplepoint;
                grapplinghook.autoConfigureConnectedAnchor = false;
                grapplinghook.enableCollision = true;
                grapplinghook.distance = hitInfo.distance * Time.deltaTime * force;
                grapplinghook.dampingRatio = 10f;
           
            }
        }
    }

    void Stopgrapple()
    {
        grapplinghook.enabled = false;
    }

    void drawRope()
    {
        if (grapplinghook.isActiveAndEnabled)
        {
            gr.LineRender(player.position, grapplepoint);
        }
        else
        {
            gr.Endline();
        }
    }

    void JumpForce()
    {
        
        Vector2 jumpingforce = new Vector2(0, 1);
        rb.AddForce(jumpingforce*jumpingpower , ForceMode2D.Impulse);
    }
    
}

