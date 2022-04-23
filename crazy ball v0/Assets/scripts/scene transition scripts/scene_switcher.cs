using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class scene_switcher : MonoBehaviour
{
   public void play_game()
    {
        SceneManager.LoadScene(2);

    }
    public void how_to_play()
    {
        SceneManager.LoadScene(1);
    }

    public void go_back()
    {
        SceneManager.LoadScene(0);
    }

    public void close()
    {
        Application.Quit();
    }
}
