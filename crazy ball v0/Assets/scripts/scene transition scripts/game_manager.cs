using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class game_manager : MonoBehaviour
{
    
    public void Endgame()
    {
        StartCoroutine(waitandchange());
        
        IEnumerator waitandchange()
        {
            yield return new WaitForSeconds(1.2f);
            
            SceneManager.LoadScene(3);
        }
        

    }
    
}
