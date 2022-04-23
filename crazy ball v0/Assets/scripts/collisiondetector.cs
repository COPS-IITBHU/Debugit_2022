using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class collisiondetector : MonoBehaviour
{

    public ParticleSystem obs_destroy;
    public ParticleSystem bonus100_destroy;
    public ParticleSystem bonus200_destroy;

    public ParticleSystem player_death;
    public Text scoretext;
    public int points = 0;
    public bool player_is_dead = false;


    [System.Obsolete]
    private void OnCollisionEnter2D(Collision2D collision)
    {

        if(collision.collider.tag == "Hook")
        {
            points += 10;      
            Destroy(collision.gameObject);
            FindObjectOfType<audio_manager>().play("ObjectDeath");
            Instantiate(obs_destroy, collision.transform.position, Quaternion.identity);
            //Debug.Log(points);
            scoretext.text = "score:"+(points).ToString();
        }

        if (collision.collider.tag == "bonus100")
        {
            points += 100;
            Destroy(collision.gameObject);
            FindObjectOfType<audio_manager>().play("ObjectDeath");
            Instantiate(bonus100_destroy, collision.transform.position, Quaternion.identity);
            //Debug.Log(points);
            scoretext.text = "score:" + (points).ToString();
        }

        if (collision.collider.tag == "bonus200")
        {
            points += 200;
            Destroy(collision.gameObject);
            FindObjectOfType<audio_manager>().play("ObjectDeath");
            Instantiate(bonus200_destroy, collision.transform.position, Quaternion.identity);
            //Debug.Log(points);
            scoretext.text = "score:" + (points).ToString();
        }

        if (collision.collider.tag == "lava")
        {
            FindObjectOfType<audio_manager>().play("PlayerDeath");

            Destroy(gameObject);

            Instantiate(player_death, transform.position, Quaternion.identity);
            FindObjectOfType<game_manager>().Endgame();

            if (points >= PlayerPrefs.GetInt("points", 0))
            {
                PlayerPrefs.SetInt("points", points);
            }

        }

    }

   
}
