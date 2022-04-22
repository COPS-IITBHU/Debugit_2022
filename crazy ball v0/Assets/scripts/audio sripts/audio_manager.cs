using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Audio;
using System;
public class audio_manager : MonoBehaviour
{
    public Sound[] sounds;

    public static audio_manager instance;

    // Start is called before the first frame update
    void Awake()
    {
        if(instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
            return;
        }
        DontDestroyOnLoad(gameObject);
        //upar ka pura samajh mei nahi aaya hai abhi. 

        foreach(Sound s in sounds)
        {
            s.source = gameObject.AddComponent<AudioSource>();
            s.source.clip = s.clip;//yahan pe s.source.clip jo naya component add kiya hai uska clip wala part hai
                                   //jabki s.clip apne custom class wala clip variable hai
                                   // basically apne custom class ke variable ke values ko naye component mei assign kar rhe hain
            s.source.volume = s.volume;//similarly volume aur pitch ke saath bhi hai
            s.source.pitch = s.pitch;
            s.source.loop = s.loop;
        }
        
    }

    private void Start()
    {
        play("bg_music");
    }

    public void play(string name)
    {
        Sound s = Array.Find(sounds, sound => sound.name == name);//this.name bhi try karna ek baar
        s.source.Play();
    }
}
