using UnityEngine;
using UnityEngine.UI;

public class NonstopDebate : MonoBehaviour
{
    public float speed = 200f; // 文字が流れる速度

    void Update()
    {
        // 1. 左方向に移動し続ける
        transform.Translate(Vector3.left * speed * Time.deltaTime);

        // 2. 画面外（左）に消えたら右から出し直す（ループ）
        if (transform.position.x < -200) 
        {
            transform.position = new Vector3(Screen.width + 200, transform.position.y, 0);
        }
    }

    // 3. ボタン（弱点）がクリックされた時の処理
    public void OnShot()
    {
        Debug.Log("論破！：正解の証拠が突きつけられました");
        gameObject.SetActive(false); // とりあえず消す
    }
}