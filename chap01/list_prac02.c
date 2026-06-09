#include <stdio.h>

int main(){
    int ai;
    int iu;

    printf("整数を入力してください：");
    scanf("%d", &ai);

    printf("%dに13を加えると%dです。\n", ai, ai+13);

    printf("整数を入力してください：");
    scanf("%d", &iu);

    printf("%dから7を減じると%dです。\n", iu, iu-7);

    return 0;
}